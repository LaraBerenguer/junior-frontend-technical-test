export const formatIsoToReadable = (dateIso) => {
    const date = new Date(dateIso);

    const formatter = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "UTC"
    });

    return formatter.format(date);
};