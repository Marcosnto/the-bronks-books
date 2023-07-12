type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div
      className="
        text-center 
        text-4xl  
        font-bold
        text-slate-50
        bg-emerald-600 
        p-5"
    >
      {title}
    </div>
  );
}