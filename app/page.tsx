import CreateQuoteForm from "@/components/create_quote_form/CreateQuoteForm";
import QuoteList from "@/components/quote_list/QuoteList";

const page = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full h-16 bg-primary flex items-center justify-between px-8">
                <h1 className="text-primary-foreground font-bold">
                    Quote<span className="text-secondary-foreground">View</span>
                </h1>
                <CreateQuoteForm />
            </header>
            <main className="min-h-screen bg-background p-8 pt-24">
                <QuoteList />
            </main>
        </>
    );
};

export default page;
