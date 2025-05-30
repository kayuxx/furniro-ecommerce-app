const Ul = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <ul className={`${className} flex items-center justify-center gap-12`}>
      {children}
    </ul>
  );
};

Ul.li = function Li({ children }: { children: React.ReactNode }) {
  return <li className="text-black">{children}</li>;
};

export default Ul;
