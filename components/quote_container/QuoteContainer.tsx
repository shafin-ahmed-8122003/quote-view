import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CopyIcon, HeartIcon } from "lucide-react";

const QuoteContainer = ({
    author,
    quote,
    speaker,
    reaction,
    reacted,
}: {
    author: string;
    quote: string;
    speaker: string;
    reaction: number;
    reacted: boolean;
}) => {
    return (
        <div className="w-full max-w-[500px] ring-4 ring-primary p-4 flex flex-col bg-secondary rounded-lg">
            <div className="text-secondary-foreground flex gap-2 items-center">
                <Avatar className="ring-2 ring-primary text-foreground">
                    <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold">{author}</h1>
            </div>
            <blockquote className="italic text-center text-secondary-foreground my-4">
                {`"${quote}"`}
                <cite className="flex justify-end">{`- ${speaker}`}</cite>
            </blockquote>
            <div className="flex justify-between items-center">
                <Button variant="quotes">
                    <HeartIcon
                        className={`love-icon ${reacted ? "fill-primary-foreground" : null}`}
                    />
                    <span className="text-lg">{reaction}</span>
                </Button>
                <Button variant="quotes">
                    <CopyIcon />
                    <span className="text-lg">Copy</span>
                </Button>
            </div>
        </div>
    );
};

export default QuoteContainer;
