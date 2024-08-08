import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        src="/images/logo/snowflake-logo.svg"
        width={50}
        height={50}
        alt="logo"
        priority={true}
      />
    </div>
  );
};
