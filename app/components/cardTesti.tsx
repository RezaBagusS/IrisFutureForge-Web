import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import asahOtak from "../../public/AsahOtak.webp";

interface CardInfoProps {
  desc: string;
  from: string;
}

export function CardTesti({ from, desc }: CardInfoProps) {
  return (
    <Card placeholder={""} className="mt-6 max-w-96 flex flex-col justify-between">
      <CardBody
        placeholder={""}
        className="flex flex-col justify-between gap-5"
      >
        <Typography placeholder={""} className="text-custDark/60">
        &quot;{desc}&quot;
        </Typography>
        <div className="flex gap-2 items-center">
          <Image
            src={asahOtak}
            alt="profile"
            height={30}
            className="rounded-full"
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className=""
          >
            {from}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
