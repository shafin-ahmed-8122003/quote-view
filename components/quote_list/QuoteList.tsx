"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import QuoteContainer from "../quote_container/QuoteContainer";

const QuoteList = () => {
    const quotes = useQuery(api.quote.getQuoteList);
    console.log(quotes);

    if (!quotes) {
        return <h1>Loading...</h1>;
    }

    return (
        <section className="flex flex-col gap-4">
            {quotes.map((quote) => (
                <QuoteContainer
                    author={quote.author}
                    quote={quote.quote}
                    reacted={false}
                    reaction={0}
                    speaker={quote.speaker}
                />
            ))}
        </section>
    );
};

export default QuoteList;
