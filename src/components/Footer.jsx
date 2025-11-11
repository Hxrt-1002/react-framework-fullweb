import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-gradient-to-r from-orange-400 to-orange-200 text-black mt-10">
                <div class="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">

                    <p class="text-sm">&copy; 2025 International Food Menu. สงวนลิขสิทธิ์ทุกประการ.</p>

                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" class="hover:text-orange-800 transition-colors">Facebook</a>
                        <a href="#" class="hover:text-orange-800 transition-colors">Instagram</a>
                        <a href="#" class="hover:text-orange-800 transition-colors">Twitter</a>
                        <a href="#" class="hover:text-orange-800 transition-colors">Contact</a>
                    </div>
                </div>

                <div class="bg-orange-900 text-white text-xs text-center py-2">
                    ออกแบบและพัฒนาโดยทีม International Food Menu
                </div>
            </footer>
        </>
    )
}

export default Footer