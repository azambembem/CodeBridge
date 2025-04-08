// export default CallToUs;
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, message as AntMessage } from "antd";
import axios from "axios";

const CallToUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:7070/api/contact/send-email",
        formData
      );
      AntMessage.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // 폼 초기화
    } catch (error) {
      console.error(error);
      AntMessage.error("Failed to send message.");
    }
  };

  return (
    <div className="w-[90%] m-auto flex flex-col lg:flex-row gap-12">
      {/* 왼쪽: 연락처 섹션 */}
      <div className="flex-1">
        <div className="mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                {/* 전화 아이콘 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
            </div>
            <p className="text-[#000] ml-12 mb-1">
              We are available 24/7 days a week
            </p>
            <p className="text-[#000] ml-12">Phone: +8801911112222</p>
          </div>
          <div className="border-t border-gray-200 my-6 w-[250px] ml-12 mb-2"></div>

          <div className="mt-8 w-[340px] h-[457px] flex flex-col gap-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                {/* 메일 아이콘 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
            </div>
            <p className="text-[#000] ml-12 mb-1">
              Fill out our form and we will contact you within 24 hours
            </p>
            <p className="text-[#000] ml-12 mb-1">
              Emails: customer@exclusive.com
            </p>
            <p className="text-[#000] ml-12">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* 오른쪽: 폼 섹션 */}
      <div className="flex-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name *"
              className="bg-gray-100 rounded-md px-4 py-6 w-full md:w-1/3"
              required
            />
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email *"
              className="bg-gray-100 rounded-md px-4 py-6 w-full md:w-1/3"
              required
            />
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Your Phone *"
              className="bg-gray-100 rounded-md px-4 py-6 w-full md:w-1/3"
              required
            />
          </div>

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-100 rounded-md px-4 py-4 w-full h-[207px] mt-8"
            rows={6}
          />

          <div className="flex justify-end">
            <Button
              htmlType="submit"
              variant="dashed"
              className="bg-red-500 text-white rounded-md px-6 py-6 mt-5"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallToUs;
