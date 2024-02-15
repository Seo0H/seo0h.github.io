import FilterTagBtn from '@/components/FilterTagBtn';

const TagFilter = ({
  onSelect,
  selectedTag,
  tags,
}: {
  onSelect: (tag: string) => void;
  selectedTag: string;
  tags: string[];
}) => {
  return (
    <>
      <FilterTagBtn onClick={() => onSelect('ALL')} $isSelected={selectedTag === 'ALL'}>
        ALL
      </FilterTagBtn>
      {tags.map((tag) => (
        <FilterTagBtn
          key={crypto.randomUUID()}
          onClick={() => onSelect(tag || '')}
          $isSelected={selectedTag === tag}
        >
          {tag}
        </FilterTagBtn>
      ))}
    </>
  );
};

export default TagFilter;
