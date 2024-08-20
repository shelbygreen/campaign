import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function porterTable() {
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
                    <td className="px-6 py-2">Advocate for safe streets and zero traffic fatalities (albeit, she didn’t call on City intervention until after a <Link href="https://www.tallahassee.com/story/news/2024/04/29/pedestrian-killed-after-being-struck-by-a-vehicle-near-florida-state-campus/73507650007/">notable traffic</Link> and <Link href="https://www.tallahassee.com/story/news/local/2024/04/04/dangerous-tallahassee-streets-intersections-for-pedestrians-cyclists-killed/72804246007/">160+ regional traffic fatalities</Link>)</td>
                    <td className="px-6 py-2">Consistently votes ‘no’ on items without providing an alternative that could deliver a ‘yes’</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Dedicated to fighting for a wage increase for Tallahassee’s Firefighters</td>
                    <td className="px-6 py-2">Seldomly attends public events hosted by the City</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Supports better protections for renters and using publicly-owned land to encourage affordable housing development</td>
                    <td className="px-6 py-2">Not always responsive to constituent concerns/emails</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Takes accountability for the bitter split on the Commission and seeks advice on how to improve collaboration</td>
                    <td className="px-6 py-2">Continued failure to address leftover resentment from her 2020 campaign</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}