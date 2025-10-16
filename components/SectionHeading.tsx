type SectionHeadingProps = {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="section-header">{children}</h2>
  )
};