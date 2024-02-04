import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
interface CardInfoProps {
    title: string;
    status: boolean;
    desc: string;
}

  export function CardInfo({ title, status, desc }: CardInfoProps) {
    return (
      <Card placeholder={""} className="mt-6 max-w-72 flex flex-col justify-between">
        <CardBody placeholder={""}>
          <Typography placeholder={""} color="blue-gray" className="mb-2 text-lg md:text- xl font-bold">
            {title}
          </Typography>
          <Typography placeholder={""} className="text-custDark/60 text-sm md:text-base">
            {desc}
          </Typography>
        </CardBody>
        <CardFooter placeholder={""} className="pt-0">
            <Button
                color={status ? "blue" : "red"}
                size="md"
                placeholder={""}
                disabled={status ? false : true}
            >
                {status ? "Open" : "Closed"}
            </Button>
        </CardFooter>
      </Card>
    );
  }