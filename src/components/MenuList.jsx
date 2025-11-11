import React from 'react'

const MenuList = (props) => {
    return (
        <>
            <div key={props.id} className="bg-orange-50 rounded-3xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img src={props.image} alt={props.title} className="w-full h-50 object-cover" />
                <div className="p-4 flex flex-col justify-between h-40">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{props.title}</h2>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{props.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-orange-500 font-bold text-base">{props.price} ฿</span>
                        <button className="px-6 py-2 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition-all">
                            สั่งเลย
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuList