import  { useState } from 'react';
import { Server } from 'lucide-react';
import { FaHeadset } from 'react-icons/fa';

export default function VPSPricingTable() {
    const [activeTab, setActiveTab] = useState('non-ha');

    const nonHAPlans = [
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v2', ram: 4, cores: 2, storage: 30, speed: 'Upto 3.00 GHZ', bandwidth: '1 TB', price: 740 },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 8, cores: 4, storage: 100, speed: 'Upto 3.00 GHZ', bandwidth: '1 TB', price: 850 },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 12, cores: 4, storage: 100, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: 1250, featured: true },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 12, cores: 8, storage: 100, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: 1550 },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 16, cores: 8, storage: 200, speed: 'Upto 3.00 GHZ', bandwidth: '1 TB', price: 1850 },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 24, cores: 8, storage: 150, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: 2050 },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 32, cores: 8, storage: 200, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: 2350 },
    ];

    const haPlans = [
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 10, cores: 2, storage: 100, speed: 'Upto 3.00 GHZ', bandwidth: '1 TB', price: '2999/-' },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 10, cores: 4, storage: 100, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: '3399/-' },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 12, cores: 4, storage: 100, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: '4199/-', featured: true },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 12, cores: 6, storage: 100, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: '4999/-' },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 16, cores: 6, storage: 100, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: '6099/-' },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 24, cores: 6, storage: 150, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: '7999/-' },
        { processor: 'E2136 / E2236 / E5-1650v3 / E5-2643v3', ram: 32, cores: 8, storage: 200, speed: 'Upto 3.30 GHZ', bandwidth: '1 TB', price: '10699/-' },
    ];

    const currentPlans = activeTab === 'non-ha' ? nonHAPlans : haPlans;
    const isHA = activeTab === 'ha';

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-gray-600 text-sm mb-2">Server Pricing That Makes Sense: Flexible and Predictable</p>
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">VPS Linux Plans</h1>
                    
                    {/* Tab Buttons */}
                    <div className="flex justify-center gap-4 mb-6">
                        <button
                            onClick={() => setActiveTab('non-ha')}
                            className={`px-6 py-3 rounded font-semibold text-sm transition-colors ${
                                activeTab === 'non-ha'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            NON-HA SOLUTION
                        </button>
                        <button
                            onClick={() => setActiveTab('ha')}
                            className={`px-6 py-3 rounded font-semibold text-sm transition-colors ${
                                activeTab === 'ha'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            HIGH AVAILABILITY
                        </button>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-7 gap-3 bg-gray-100 border-b border-gray-300 px-4 py-3">
                        <div className="text-sm font-semibold text-gray-700">Processor Model</div>
                        <div className="text-sm font-semibold text-gray-700 text-center">Per GB Ram</div>
                        <div className="text-sm font-semibold text-gray-700 text-center">Logical vCores</div>
                        <div className="text-sm font-semibold text-gray-700 text-center">Storage - SSD/NVME</div>
                        <div className="text-sm font-semibold text-gray-700 text-center">Clock Speed</div>
                        <div className="text-sm font-semibold text-gray-700 text-center">Bandwidth</div>
                        <div className="text-sm font-semibold text-gray-700 text-center">Price/Month</div>
                    </div>

                    {/* Table Body */}
                    {currentPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-7 gap-3 px-4 py-4 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors ${
                                plan.featured ? 'bg-blue-50' : ''
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600 rounded p-2 flex-shrink-0">
                                    <Server className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm text-gray-800">{plan.processor}</span>
                            </div>
                            <div className="text-center text-sm text-gray-800">{plan.ram}</div>
                            <div className="text-center text-sm text-gray-800">{plan.cores}</div>
                            <div className="text-center text-sm text-gray-800">{plan.storage}</div>
                            <div className="text-center text-sm text-gray-700">{plan.speed}</div>
                            <div className="text-center text-sm text-gray-800">{plan.bandwidth}</div>
                            <div className="flex flex-col gap-2">
                                <span className="text-center font-bold text-gray-900 text-base">₹{plan.price}</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                                    Buy Now
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Footer Rows */}
                    <div className="border-t-2 border-gray-300">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-3 text-sm font-semibold text-gray-700 text-center border-r border-gray-300 bg-gray-50">
                                ADDON / {isHA ? '1GB' : 'GB'} RAM
                            </div>
                            <div className="px-4 py-3 text-sm font-semibold text-gray-900 text-center bg-gray-50">
                                RS. {isHA ? '250' : '150'}/- MONTHLY
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-gray-300">
                            <div className="px-4 py-3 text-sm font-semibold text-gray-700 text-center border-r border-gray-300 bg-gray-50">
                                ADDON / 1 vCPU
                            </div>
                            <div className="px-4 py-3 text-sm font-semibold text-gray-900 text-center bg-gray-50">
                                RS. {isHA ? '250' : '150'}/- MONTHLY
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-gray-300">
                            <div className="px-4 py-3 text-sm font-semibold text-gray-700 text-center border-r border-gray-300 bg-gray-50">
                                ADDON / 1 GB STORAGE
                            </div>
                            <div className="px-4 py-3 text-sm font-semibold text-gray-900 text-center bg-gray-50">
                                RS. {isHA ? '8' : '5'}/- MONTHLY
                            </div>
                        </div>
                        <div className="border-t border-gray-300 bg-gray-50">
                            <div className="px-4 py-3 text-sm font-semibold text-gray-700 text-center">
                                {isHA ? '15 DAYS SNAPSHOT BACKUP INCLUDED' : 'NO BACKUP SNAPSHOT INCLUDED'}
                            </div>
                        </div>
                        <div className="border-t border-gray-300 bg-gray-50">
                            <div className="px-4 py-3 text-sm font-semibold text-gray-700 text-center">
                                DATACENTER - TIER - {isHA ? 'IV' : 'III'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <section>
                <div>
                    <div className="text-center mt-12">
                        <h1 className="flex items-center justify-center gap-2 text-lg font-semibold py-3">
                            <FaHeadset className="text-blue-800" />
                            We're Here to Help You
                        </h1>
                        <p className="text-xs">Have some questions?<span className="text-orange-500">Chat with us now,</span>or send us an email to get in touch.</p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}