"use server"

interface Props {
    url: string;
}
const Facts = async ({ url }: Props) => {

    try {

        if (!url) {
            throw new Error("No url.");
        }

        const res = await fetch(url);

        // test
        // console.log("Facts response:", res);

        const contentType = res.headers.get("content-type") || "";

        const statusErrorsCodes = [503, 404]

        // Handle 503 explicitly
        if (statusErrorsCodes.includes(res.status)) {
            throw new Error(`${res.statusText} (${res.status}).`);
        }

        // If the API returned HTML instead of JSON
        if (contentType.includes("text/html")) {
            return await res.text();
        }

        // If it's JSON (normal case)
        if (contentType.includes("application/json")) {
            return await res.json();
        }

        // Unknown type → fail
        throw new Error(`Unsupported content type: ${contentType}`);
    }
    catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return message;
    }
}

export {
    Facts
}