import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Return the last 100 quotes.
export const getQuoteList = query({
    args: {},
    handler: async (ctx, args) => {
        const quotes = await ctx.db.query("quotes").order("desc").take(100);
        return quotes;
    },
});

// Create a new quote with the given details
export const createQuote = mutation({
    args: { author: v.string(), quote: v.string(), ownQuote: v.boolean(), speaker: v.string() },
    handler: async (ctx, args) => {
        await ctx.db.insert("quotes", args);
    },
});
