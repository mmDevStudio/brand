export default function Profile({
  name,
  title,
  children,
}: {
  name: string;
  title: string;
  children: string;
}) {
  return (
    <article className="flex flex-col">
      <span className="text-xl text-text font-heading font-bold">{name}</span>
      <span className="text-text-subtle font-heading text-body font-bold mb-3 uppercase">
        {title}
      </span>
      <span className="text-text-subtle leading-10 text-body font-body">
        {children}
      </span>
    </article>
  );
}
