import links from "@/data-sources/nav-links";

export default function NavDrawer() {
  return (
    <div className="fixed right-0 top-10 h-[95.4vh]  w-[60vw] shadow-2xl flex flex-col gap-4">
      <p className="py-20 self-center text-4xl text-blue-600 font-bold">Logo</p>
      <hr className="border-blue-600 border-2"></hr>
      <div className="flex flex-col gap-4 text-2xl py-20 text-blue-400 items-center">
        {links.map((link, index) => (
          <a
            className="hover:text-blue-600 hover:underline"
            key={index}
            href={link.path}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
