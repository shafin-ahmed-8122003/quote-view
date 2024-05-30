"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { api } from "@/convex/_generated/api";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useMutation } from "convex/react";
import { useState } from "react";

const CreateQuoteForm = () => {
    const createQuote = useMutation(api.quote.createQuote);

    const [quoteDetails, setQuoteDetails] = useState({
        author: "",
        quote: "",
        ownQuote: false,
        speaker: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuoteDetails({
            ...quoteDetails,
            [e.target.id]: e.target.value,
        });
    };

    const handleCheckBoxChange = (e: CheckedState) => {
        setQuoteDetails({
            ...quoteDetails,
            ownQuote: Boolean(e),
            speaker: quoteDetails.author,
        });
    };

    const handleSubmission = async () => {
        await createQuote(quoteDetails);
        setQuoteDetails({
            author: "",
            quote: "",
            ownQuote: false,
            speaker: "",
        });
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="create">Create Quote</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle className="text-primary-foreground">Create a Quote</SheetTitle>
                    <SheetDescription className="text-secondary">
                        {
                            "You can create your own or other famous persons quotes. If it's someone else's quote, please specify that"
                        }
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="author" className="text-right">
                            Author
                        </Label>
                        <Input
                            id="author"
                            placeholder="Your name"
                            value={quoteDetails.author}
                            onChange={handleInputChange}
                            className="col-span-3 text-primary placeholder:text-primary-foreground"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quote" className="text-right">
                            Quote
                        </Label>
                        <Input
                            id="quote"
                            placeholder="Never give up"
                            value={quoteDetails.quote}
                            onChange={handleInputChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <label
                            htmlFor="ownQuote"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Is this quote your own?
                        </label>
                        <Checkbox
                            id="ownQuote"
                            onCheckedChange={handleCheckBoxChange}
                            checked={quoteDetails.ownQuote}
                        />
                    </div>
                    <div
                        className={`${quoteDetails.ownQuote ? "hidden" : null} grid grid-cols-4 items-center gap-4`}
                    >
                        <Label htmlFor="speaker" className="text-right">
                            Speaker
                        </Label>
                        <Input
                            id="speaker"
                            placeholder="Who said the quote"
                            value={quoteDetails.speaker}
                            onChange={handleInputChange}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button onClick={handleSubmission} variant="create" type="submit">
                            Save changes
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CreateQuoteForm;
