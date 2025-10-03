import { PageHeader } from '@/components/layout/page-header';
import { items } from '@/lib/data';
import { ItemGrid } from './_components/item-grid';

export default function ItemsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Item Database"
        description="Search and explore all the items available in Rabbit & Steel. Click on an item to see its detailed information and synergies."
      />
      <div className="mt-8">
        <ItemGrid items={items} />
      </div>
    </div>
  );
}
