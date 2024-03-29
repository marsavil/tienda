import Image from "next/image";

interface Props {
  userImage: string;
  size: number;
}

const UserIcon = ({ userImage, size }: Props) => {
  console.log(userImage)
  return (
    <Image 
      src={userImage} 
      alt="User" 
      width={size} 
      height={size} 
      className="rounded-full  border-2"
    />
    )
};

export default UserIcon;