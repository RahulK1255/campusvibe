import { Text, Img } from ".";
import React from "react";

export default function AddressTwoAddress({
  userimage = "images/img_contrast.svg",
  username = "Jone Cooper",
  useraddress = "2118 Thornridge Cir. Syracuse, Connecticut 35624",
  editbutton = "Edit",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-start pt-[23px] gap-5 px-4 sm:py-5 border-blue_gray-100 border border-solid bg-white-A700 flex-1 rounded-md`}
    >
      <div className="flex items-start gap-6 sm:flex-col">
        <Img
          src={userimage}
          alt="profileimage"
          className="h-[36px] w-[36px] sm:w-full"
        />
        <div className="flex flex-col items-start gap-3.5">
          <Text size="md" as="p" className="!font-medium">
            {username}
          </Text>
          <Text size="md" as="p" className="!text-blue_gray-800">
            {useraddress}
          </Text>
        </div>
      </div>
      <Text size="md" as="p" className="!font-medium">
        {editbutton}
      </Text>
    </div>
  );
}
