import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function johnsonTable() {
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
                    <td className="px-6 py-2">Former Mayor and City Commissioner; deeply familiar with government affairs</td>
                    <td className="px-6 py-2">Heavily reliant on political/financial support from One Tallahassee, which could influence voting decisions, if elected</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Served as the Executive Director of the Capital Area Community Action Agency where she worked to reduce economic burden and poverty in the region</td>
                    <td className="px-6 py-2">Didn't clearly define how she would avoid raising property taxes to fund the hiring of more police officers</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Opposed running Tallahassee Utilities off coal</td>
                    <td className="px-6 py-2"></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}