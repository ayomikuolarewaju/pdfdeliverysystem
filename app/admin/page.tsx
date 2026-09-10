import { createAdminClient } from '@/lib/supabase-admin';

export const dynamic = 'force-dynamic'; // always fresh — this is live sales data

export default async function AdminPage() {
  const supabase = createAdminClient();

  const [{ data: pdfs }, { data: purchases }] = await Promise.all([
    supabase.from('pdfs').select('id, title, price').order('created_at', { ascending: false }),
    supabase.from('purchases').select('pdf_id, amount').eq('status', 'success'),
  ]);

  // Aggregate sales count + revenue per PDF in JS — simpler than a Postgres
  // view for this size of catalog, and avoids maintaining SQL separately.
  const statsByPdf = new Map<string, { sales: number; revenue: number }>();
  for (const purchase of purchases ?? []) {
    const entry = statsByPdf.get(purchase.pdf_id) ?? { sales: 0, revenue: 0 };
    entry.sales += 1;
    entry.revenue += Number(purchase.amount);
    statsByPdf.set(purchase.pdf_id, entry);
  }

  const rows = (pdfs ?? []).map((pdf) => ({
    id: pdf.id,
    title: pdf.title,
    price: pdf.price,
    sales: statsByPdf.get(pdf.id)?.sales ?? 0,
    revenue: statsByPdf.get(pdf.id)?.revenue ?? 0,
  }));

  const totalSales = rows.reduce((sum, r) => sum + r.sales, 0);
  const totalRevenue = rows.reduce((sum, r) => sum + r.revenue, 0);

  return (
    <main className="bg-[#F4F2EA] min-h-screen text-[#1C1B18]">
      <div className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="font-serif text-3xl mb-1">Sales overview</h1>
        <p className="text-sm text-[#65605A] mb-8">Counts only successful, confirmed purchases.</p>

        {rows.length === 0 ? (
          <p className="text-sm text-[#65605A]">No PDFs in the catalog yet.</p>
        ) : (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-[#B7AF97] text-[#65605A]">
                <th className="py-2 font-medium">PDF</th>
                <th className="py-2 font-medium text-right">Price</th>
                <th className="py-2 font-medium text-right">Sales</th>
                <th className="py-2 font-medium text-right">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-[#D3CDBB]">
                  <td className="py-3">{r.title}</td>
                  <td className="py-3 text-right font-mono">₦{r.price.toLocaleString()}</td>
                  <td className="py-3 text-right font-mono">{r.sales}</td>
                  <td className="py-3 text-right font-mono">₦{r.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold">
                <td className="py-3">Total</td>
                <td />
                <td className="py-3 text-right font-mono">{totalSales}</td>
                <td className="py-3 text-right font-mono">₦{totalRevenue.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </main>
  );
}
