import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ userInput }) {
    const result = calculateInvestmentResults(userInput);
    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Interest</th>
                <th>Annual Investment</th>
                <th>Value End of Year</th>
            </tr>
        </thead>
        <tbody>
            {result.map((item) => (
                <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.annualInvestment)}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                </tr>
            ))}
        </tbody>
    </table>
}