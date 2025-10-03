import { PageHeader } from '@/components/layout/page-header';
import { userTierLists, gameClasses, items } from '@/lib/data';
import { UserTierListContainer } from './_components/user-tier-list-container';

export default function MyTierListsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="My Tier Lists"
        description="View your saved tier lists. Use the power of AI to analyze your rankings and get suggestions for improvement."
      />
      <div className="mt-8 space-y-12">
        {userTierLists.map((tierList) => {
          const gameClass = gameClasses.find(c => c.name === tierList.class);
          return (
            <UserTierListContainer
              key={tierList.class}
              initialTierList={tierList}
              gameClass={gameClass}
              items={items}
            />
          );
        })}
      </div>
    </div>
  );
}
