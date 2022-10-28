import { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

export const Useranagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="a"
          fullName="aaaaa"
        />
      </WrapItem>
    </Wrap>
  );
});
