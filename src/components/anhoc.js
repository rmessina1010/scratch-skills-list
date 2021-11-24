export function withComp(TheComp) {
    return (() => {
        let provided = {
            stuffies: ['havoc', 'bushy', 'dormamu'],
            other: 85
        }
        return <TheComp provided={provided} />;
    });
}