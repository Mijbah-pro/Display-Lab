import Detail from "@/components/detail";

async function Details({ searchParams }) {
    const resolvedParams = await searchParams;
    console.log("searchParams", resolvedParams); // log
    const product_name = resolvedParams?.product_name || "1";
    return (
        <Detail productName={product_name} />
    );
}

export default Details;