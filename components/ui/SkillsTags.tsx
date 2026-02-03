type SkillsTagsProps = {
  tags: readonly string[];
  size: string;
};

export const SkillsTags = ({ tags, size = "12px" }: SkillsTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <ul className="skills-tags">
      {tags.map((tag) => (
        <li key={tag} className="skills-tags__tag" style={{ fontSize: size }}>
          <span>{tag}</span>
        </li>
      ))}
    </ul>
  );
}