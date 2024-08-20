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
                    <td className="px-6 py-2">Supports using City funds to provide transportation to the Amazon facility</td>
                    <td className="px-6 py-2">Low campaign visibility and not viewed as a competitive candidate</td>
                </tr>
                <tr>
                    <td className="px-6 py-2">Believes the negotiations between the City and the Tallahassee Firefighter's Union has been dragged out for too long and is impacting workers</td>
                    <td className="px-6 py-2"></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}