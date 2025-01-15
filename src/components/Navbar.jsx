import { linksDetail } from "@/utils/links-detail";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex-col flex md:flex-row md:justify-between md:items-center w-full md:px-40 md:py-2 p-4 gap-6 md:sticky md:top-0 ">
      <img src="/AboutMe..png" alt="Logo" className="max-w-40 md:w-auto" />
      <div className="flex-col flex md:flex-row md:items-center md:gap-2">
        {linksDetail.map((link) => (
          <div key={link.id}>
            <Link href={link.href}>
              <Button
                variant="link"
                className="text-[#9CA3AF] bg-[#020617] px-2 rounded hover:no-underline uppercase"
              >
                {link.btnText}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
