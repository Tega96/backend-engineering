
function runUrlDemo(): void {

    // Create url object from url string using the URL() class
    const apiUrl = new URL("https://bostratech.com/user?page=2&limit=10&sort=latest");
    console.log(
        apiUrl.href,
        apiUrl.hostname,
        apiUrl.pathname,
        apiUrl.protocol,
        apiUrl.search
    )

    // Search params ? - gives you the capacity to read query parameters.
    // How to extract search params
    const page = apiUrl.searchParams.get("page")
    const limit = apiUrl.searchParams.get("limit");
    const sort = apiUrl.searchParams.get("sort")

    console.log(page, limit, sort)

    // How to update a search parameter url
    apiUrl.searchParams.set("page", "4")
    apiUrl.searchParams.set("limit", "30")
    apiUrl.searchParams.set("sort", "old")

    console.log(apiUrl.href)


    // Query params
    const queryParams = new URLSearchParams({
        search: "Node js",
        page: '1',
        limit: "12",
    })
    console.log(queryParams.toString())
}
runUrlDemo()

/**
 * Filter, search, sort
 */