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
                    <td className="px-6 py-2">Strong supporter of the advancement of Southside, where he's raised his family</td>
                    <td className="px-6 py-2">Doesn't normally present original ideas or policy proposals to the Commission</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Regularly attends City events and is proud to represent Tallahassee</td>
                    <td className="px-6 py-2">Grown complacent with resolving urgent issues like high violence and poverty rates</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Successfully fought for the expansion of the Greater Frenchtown/Southside Community Redevelopment District to include three south side neighborhoods — Springhill, Orange Avenue and South City</td>
                    <td className="px-6 py-2">Infrequently challenges the Mayor's and City Manager's leadership on decisions that could negatively harm his own neighbors </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}