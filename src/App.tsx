import { Button } from "@heroui/react";
import { ArrowRight } from "@phosphor-icons/react";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center font-semibold">
      <Button
        color="secondary"
        endContent={<ArrowRight weight="bold" size={16} />}
        className="font-bold"
      >
        Button
      </Button>
    </div>
  );
}
