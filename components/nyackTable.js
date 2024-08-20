import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function richardsonTable() {
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
                    <td className="px-6 py-2">A local nurse</td>
                    <td className="px-6 py-2">Has attended very few candidate forums and repeatedly dismissed requests from reporters, making it hard to believe she's not a <Link href="https://www.tallahassee.com/story/news/politics/elections/2024/08/17/2024-election-control-of-tallahassee-city-hall-back-on-the-ballot/74767320007/">ghost candidate</Link></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}