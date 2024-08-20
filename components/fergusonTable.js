import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function fergusonTable() {
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
                    <td className="px-6 py-2">Well aware of the issues plaguing some of Tallahassee’s most vulnerable residents</td>
                    <td className="px-6 py-2">Has not issued any substantial policy solutions</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Supports underground power line installation to prevent prolonged power outages</td>
                    <td className="px-6 py-2">Heavily reliant on political/financial support from Grow Tallahassee, which could impair his judgment, if elected</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Believes elected officials must follow standards of high ethical conduct</td>
                    <td className="px-6 py-2">Endorsed his opponent after failing to advance in the 2022 primary, when a few months prior, he said his opponent engaged in “<Link href="https://www.tallahassee.com/story/news/local/2022/02/07/nick-maddox-leon-county-commission-sexual-harassment-boys-and-girls-club/6628718001/">inappropriate behavior</Link>” with a close family member</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}