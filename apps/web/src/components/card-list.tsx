import { ListCard } from '@/components/ui-extended/list-card';

export type CardListItem = {
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
};

type Props = {
  readonly items: readonly CardListItem[];
  readonly emptyText: string;
};

export const CARD_LIST_CLASS = 'w-full columns-1 gap-x-12 sm:columns-2';

export function CardList({ items, emptyText }: Props) {
  return (
    <div className={CARD_LIST_CLASS}>
      {items.length > 0 ? (
        items.map((item) => (
          <ListCard key={item.href} title={item.title} subtitle={item.subtitle} href={item.href} />
        ))
      ) : (
        <p className="text-center text-text-subtle">{emptyText}</p>
      )}
    </div>
  );
}
