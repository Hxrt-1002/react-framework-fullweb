const menu = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://picsum.photos/seed/carbonara/800/600",
    description: "พาสต้าอิตาเลียนคลุกครีมชีส พาร์เมซาน เบคอน และไข่แดง เข้มข้นหอมมัน",
    price: 180
  },
  {
    id: 2,
    title: "Sushi Platter",
    image: "https://picsum.photos/seed/sushi/800/600",
    description: "ซูชิรวมหลายหน้า ทั้งปลาแซลมอน ทูน่า ไข่หวาน และข้าวญี่ปุ่นหุงร้อนพอดี",
    price: 320
  },
  {
    id: 3,
    title: "Pad Thai Shrimp",
    image: "https://picsum.photos/seed/padthai/800/600",
    description: "ผัดไทยสูตรต้นตำรับ เส้นเหนียวนุ่ม ผัดกับกุ้งสด เต้าหู้ และถั่วลิสง",
    price: 150
  },
  {
    id: 4,
    title: "Kimchi Fried Rice",
    image: "https://picsum.photos/seed/kimchi/800/600",
    description: "ข้าวผัดเกาหลีรสจัดจ้าน ใส่กิมจิ หมูสามชั้น และไข่ดาวเยิ้มๆ",
    price: 130
  },
  {
    id: 5,
    title: "Beef Bulgogi",
    image: "https://picsum.photos/seed/bulgogi/800/600",
    description: "เนื้อวัวหมักซอสเกาหลีหวานเค็ม ย่างบนกระทะร้อน เสิร์ฟพร้อมข้าวและผักสด",
    price: 250
  },
  {
    id: 6,
    title: "Tom Yum Goong",
    image: "https://picsum.photos/seed/tomyum/800/600",
    description: "ต้มยำกุ้งน้ำข้นรสเผ็ดเปรี้ยวหอมสมุนไพรไทย กุ้งสดตัวใหญ่",
    price: 160
  },
  {
    id: 7,
    title: "Fish and Chips",
    image: "https://picsum.photos/seed/fishchips/800/600",
    description: "ปลาทอดกรอบสไตล์อังกฤษ เสิร์ฟกับมันฝรั่งทอดและซอสทาร์ทาร์",
    price: 190
  },
  {
    id: 8,
    title: "Tacos al Pastor",
    image: "https://picsum.photos/seed/tacos/800/600",
    description: "ทาโก้เม็กซิกันไส้หมูหมักพริกและสับปะรด เสิร์ฟบนแป้งข้าวโพดนุ่มๆ",
    price: 140
  },
  {
    id: 9,
    title: "Pho Bo (Vietnamese Beef Noodle Soup)",
    image: "https://picsum.photos/seed/pho/800/600",
    description: "ก๋วยเตี๋ยวเนื้อเวียดนาม น้ำซุปหอมเครื่องเทศ เสิร์ฟพร้อมใบโหระพาและมะนาว",
    price: 150
  },
  {
    id: 10,
    title: "Margherita Pizza",
    image: "https://picsum.photos/seed/pizza/800/600",
    description: "พิซซ่าอิตาเลียนแท้ หน้าโมซาเรลลาชีส มะเขือเทศ และใบโหระพา",
    price: 220
  },
  {
    id: 11,
    title: "Chicken Curry with Naan",
    image: "https://picsum.photos/seed/curry/800/600",
    description: "แกงกะหรี่ไก่อินเดียรสเข้ม เสิร์ฟคู่แป้งนานนุ่มหอม",
    price: 180
  },
  {
    id: 12,
    title: "Croissant Sandwich",
    image: "https://picsum.photos/seed/croissant/800/600",
    description: "ครัวซองต์เนยอบกรอบ ไส้แฮม ชีส และผักสดแบบฝรั่งเศส",
    price: 120
  },
  {
    id: 13,
    title: "Paella Valenciana",
    image: "https://picsum.photos/seed/paella/800/600",
    description: "ข้าวผัดสเปนหุงด้วยซาฟรอน ใส่ซีฟู้ด กุ้ง หอย และไก่",
    price: 260
  },
  {
    id: 14,
    title: "Greek Salad",
    image: "https://picsum.photos/seed/greeksalad/800/600",
    description: "สลัดผักสด มะกอก เฟต้าชีส และน้ำสลัดมะนาวน้ำมันมะกอก",
    price: 110
  },
  {
    id: 15,
    title: "Ramen Tonkotsu",
    image: "https://picsum.photos/seed/ramen/800/600",
    description: "ราเมนซุปกระดูกหมูญี่ปุ่นเข้มข้น เส้นเหนียวนุ่ม เสิร์ฟพร้อมหมูชาชู",
    price: 200
  },
  {
    id: 16,
    title: "Falafel Wrap",
    image: "https://picsum.photos/seed/falafel/800/600",
    description: "แร็ปสไตล์ตะวันออกกลาง ไส้ลูกชิ้นถั่วบด ผัก และซอสโยเกิร์ต",
    price: 130
  },
  {
    id: 17,
    title: "Beef Stroganoff",
    image: "https://picsum.photos/seed/stroganoff/800/600",
    description: "เนื้อวัวผัดครีมซอสเห็ด เสิร์ฟพร้อมเส้นพาสต้าไข่สไตล์รัสเซีย",
    price: 240
  },
  {
    id: 18,
    title: "Caesar Salad",
    image: "https://picsum.photos/seed/caesar/800/600",
    description: "สลัดผักโรมัน ราดซอสซีซาร์ ชีส พาร์เมซาน และขนมปังกรอบ",
    price: 120
  },
  {
    id: 19,
    title: "French Onion Soup",
    image: "https://picsum.photos/seed/onionsoup/800/600",
    description: "ซุปหัวหอมฝรั่งเศส รสกลมกล่อม โรยชีสและขนมปังอบกรอบด้านบน",
    price: 160
  },
  {
    id: 20,
    title: "Chicken Shawarma",
    image: "https://picsum.photos/seed/shawarma/800/600",
    description: "ไก่หมักเครื่องเทศตะวันออกกลาง ย่างจนหอม เสิร์ฟพร้อมแป้งพิต้าและซอสกระเทียม",
    price: 170
  }

]

export default menu