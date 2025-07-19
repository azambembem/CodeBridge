// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useReduxSelector } from "@/hooks/useRedux";
// import type { BillingForm } from "@/types/billing";
// import type { useFormik } from "formik";
// import type { FC } from "react";
// import { useMemo } from "react";

// type InfoProps = {
//   formik: ReturnType<typeof useFormik<BillingForm>>;
// };

// const Info: FC<InfoProps> = (props) => {
//   const { formik } = props;
//   const { products } = useReduxSelector(({ wishlist }) => wishlist);

//   const call = useMemo(() => {
//     return products.reduce(
//       (acc, product) => acc + product.price * product.quantity,
//       0
//     );
//   }, [products]);

//   return (
//     <div className="w-[527px]">
//       <div className="flex flex-col gap-8">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="h-[54px] w-full flex items-center justify-between"
//           >
//             <div className="flex items-center gap-2">
//               <img
//                 src={product.main_image}
//                 className="w-[54px] h-[54px]"
//                 alt=""
//               />

//               <h3 className="text-base">{product.name}</h3>
//             </div>
//             <h3 className="text-base">${product.price * product.quantity}</h3>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col gap-6">
//         <div className="flex flex-col gap-2">
//           <div className="w-full flex items-center justify-between">
//             <h3 className="text-sm">Subtotal:</h3>
//             <h3 className="text-sm">{call}$</h3>
//           </div>
//           <div className="border border-solid" />
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="w-full flex items-center justify-between">
//             <h3 className="text-sm">Shipping:</h3>
//             <h3 className="text-sm">Free</h3>
//           </div>
//           <div className="border border-solid" />
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="w-full flex items-center justify-between">
//             <h3 className="text-sm">Total:</h3>
//             <h3 className="text-sm">${call}</h3>
//           </div>
//           <div className="border border-solid" />
//         </div>
//       </div>

//       <div className="mt-8 flex flex-col gap-8">
//         <div className="flex items-center space-x-2">
//           <RadioGroup defaultValue="comfortable">
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem
//                 onChange={() => {
//                   formik.setFieldValue("payment", "bank");
//                 }}
//                 checked={formik.values.payment === "bank"}
//                 value="default"
//                 id="bank"
//               />
//               <Label htmlFor="bank">Bank</Label>
//             </div>
//             <div className="mt-8 flex flex-col gap-8">
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem
//                   onChange={() => {
//                     formik.setFieldValue("payment", "cash");
//                   }}
//                   checked={formik.values.payment === "cash"}
//                   value="comfortable"
//                   id="cash"
//                 />
//                 <Label htmlFor="cash">Cash on delivery</Label>
//               </div>
//             </div>
//           </RadioGroup>
//         </div>
//       </div>
//       <div className="flex gap-2 mt-8">
//         <Input placeholder="Coupon Code"></Input>
//         <Button variant={"destructive"} className="">
//           Apply Coupon
//         </Button>
//       </div>

//       <Button
//         disabled={
//           !(formik.dirty && formik.isValid && Boolean(products.length)) ||
//           formik.isSubmitting
//         }
//         className="mt-8"
//         type="submit"
//       >
//         {formik.isSubmitting ? "Processing..." : "Place Order"}
//       </Button>
//     </div>
//   );
// };

// export default Info;

import { FaCommentDots } from "react-icons/fa"; // KakaoPay
import { BsFillDropletFill } from "react-icons/bs"; // Toss
import { MdQrCode2 } from "react-icons/md"; // ZeroPay (대체)
import { SiNaver } from "react-icons/si"; // NaverPay
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useReduxSelector } from "@/hooks/useRedux";
import type { BillingForm } from "@/types/billing";
import type { useFormik } from "formik";
import type { FC } from "react";
import { QRCode } from "antd";

const paymentIcons = [
  {
    id: "kakaopay",
    name: "KakaoPay",
    render: () => (
      <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded">
        <FaCommentDots className="text-black text-lg" />
      </div>
    )
  },
  {
    id: "naverpay",
    name: "NaverPay",
    render: () => (
      <div className="w-10 h-10 flex items-center justify-center bg-white border rounded">
        <SiNaver className="text-green-600 text-lg" />
      </div>
    )
  },
  {
    id: "tosspay",
    name: "Toss",
    render: () => (
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded">
        <BsFillDropletFill className="text-blue-600 text-lg" />
      </div>
    )
  },
  {
    id: "zeropay",
    name: "ZeroPay",
    render: () => (
      <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded">
        <MdQrCode2 className="text-gray-700 text-lg" />
      </div>
    )
  }
];

type InfoProps = {
  formik: ReturnType<typeof useFormik<BillingForm>>;
};

const Info: FC<InfoProps> = ({ formik }) => {
  const { products } = useReduxSelector(({ wishlist }) => wishlist);
  const [selectedQR, setSelectedQR] = useState<string | null>(null);

  const call = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div className="w-[527px]">
      {/* 제품 목록 */}
      <div className="flex flex-col gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="h-[54px] w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src={product.main_image}
                className="w-[54px] h-[54px]"
                alt=""
              />
              <h3 className="text-base">{product.name}</h3>
            </div>
            <h3 className="text-base">${product.price * product.quantity}</h3>
          </div>
        ))}
      </div>

      {/* 가격 정보 */}
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-sm">Subtotal:</h3>
            <h3 className="text-sm">{call}$</h3>
          </div>
          <div className="border border-solid" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-sm">Shipping:</h3>
            <h3 className="text-sm">Free</h3>
          </div>
          <div className="border border-solid" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-sm">Total:</h3>
            <h3 className="text-sm">${call}</h3>
          </div>
          <div className="border border-solid" />
        </div>
      </div>

      {/* 결제 섹션 */}
      <div className="mt-8 flex flex-col gap-8">
        {/* Bank & 간편결제 */}
        <div className="flex justify-between items-start">
          {/* 라디오 그룹 */}
          <RadioGroup defaultValue="comfortable" className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onChange={() => formik.setFieldValue("payment", "bank")}
                checked={formik.values.payment === "bank"}
                value="bank"
                id="bank"
              />
              <Label htmlFor="bank">Bank</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onChange={() => formik.setFieldValue("payment", "cash")}
                checked={formik.values.payment === "cash"}
                value="cash"
                id="cash"
              />
              <Label htmlFor="cash">Cash on delivery</Label>
            </div>
          </RadioGroup>

          {/* 간편결제 아이콘 */}
          <div className="flex flex-col items-center gap-2 ml-4">
            <div className="flex gap-2">
              {paymentIcons.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedQR(method.id)}
                  className="cursor-pointer relative"
                >
                  {method.render()}
                  {selectedQR === method.id && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 p-2 border rounded bg-white shadow-md">
                      <p className="text-xs text-center mb-1">
                        {method.name} QR
                      </p>
                      <QRCode
                        value={`https://pay.example.com/${method.id}`}
                        size={96}
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 쿠폰 입력 */}
      <div className="flex gap-2 mt-8">
        <Input placeholder="Coupon Code" />
        <Button variant="destructive">Apply Coupon</Button>
      </div>

      {/* 주문 버튼 */}
      <Button
        disabled={
          !(formik.dirty && formik.isValid && Boolean(products.length)) ||
          formik.isSubmitting
        }
        className="mt-8"
        type="submit"
      >
        {formik.isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </div>
  );
};

export default Info;
