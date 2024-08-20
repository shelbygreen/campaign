import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function dilbertTable() {
    return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900">
            <thead className="text-md bg-liteyellow text-gray-700 border-b">
                <tr>
                    <th scope="col" className="px-6 py-3">Pros</th>
                    <th scope="col" className="px-6 py-3">Cons</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-6 py-2">Has a detailed platform and vision for Tallahassee, which involves providing every resident with the opportunity to achieve a good education, earn fair and equitable wages, and if they choose to do so, raise their family in a safe environment</td>
                    <td className="px-6 py-2">Has not raised enough funds to be viewed as competitive to the political insiders that offer support, endorsements, funding, etc.</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Values moral principles like stewardship, service to others, and personal accountability</td>
                    <td className="px-6 py-2">Not well-known</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Wants to address the division on the Commission and believes Mayor Dailey should lead the efforts to bridge the divide</td>
                    <td className="px-6 py-2"></td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Believes the City needs to establish a reserve fund for future weather disasters to help restore impacted communities</td>
                    <td className="px-6 py-2"></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}