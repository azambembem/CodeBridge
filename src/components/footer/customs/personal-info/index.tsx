import {
  SelectContent,
  SelectGroup,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const PersonalInfo = () => {
  return (
    <div className="bg-[#252525] text-[#a5a5a5] min-h-screen py-8 sm:py-16 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-[16px] md:text-[24px] lg:text-[24px] font-semibold mb-8 sm:mb-10 lg:mb-12 text-[#eee]">
          개인정보 처리방침
        </h1>
        <div className="mb-6 sm:mb-8">
          <Select defaultValue="2025-01-01">
            <SelectTrigger className="w-[140px] sm:w-[160px] lg:w-[180px] h-[36px] sm:h-[40px] bg-[#262626] text-[#a5a5a5] border-[#4F4F4F] hover:border-[#4F4F4F] focus:ring-offset-0 focus:ring-transparent text-sm sm:text-base">
              <SelectValue placeholder="시행일 선택" />
            </SelectTrigger>
            <SelectContent className="bg-[#2B2B2B] text-[#eee] border-[#4F4F4F] font-light">
              <SelectGroup>
                <SelectItem value="2025-01-01">2025-01-01</SelectItem>
                <SelectItem value="2024-01-01">2024-01-01</SelectItem>
                <SelectItem value="2023-01-01">2023-01-01</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6 sm:space-y-8 text-[#a5a5a5] font-light">
          <div>
            <p className="text-[14px] leading-relaxed md:text-[15px] lg:text-[16px]">
              주식회사 투피트는 정보주체의 자유와 권리 보호를 위해 「개인정보
              보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를
              처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」
              제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을
              안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
              하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>
          </div>

          <div className="py-6 sm:py-8">
            <h2 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-semibold">
              개인정보의 처리목적
            </h2>
            <p className="text-[14px] leading-relaxed md:text-[15px] lg:text-[16px]">
              투피트는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
              목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
          </div>

          <div className="py-6 sm:py-8 text-[#a5a5a5] font-light">
            <ol className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                <span>
                  회원 가입 및 관리 : 회원 가입 의사 확인, 회원제 서비스 제공에
                  따른 본인 식별・인증, 회원자격 유지・관리, 서비스 부정이용
                  방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의
                  여부 확인, 각종 고지・통지, 고충처리 목적으로 개인정보를
                  처리합니다.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                <span>
                  제품 및 서비스 문의 기능 : 문의하기 기능을 통한 문의 답변
                  제공을 목적으로 개인정보를 처리합니다.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                <span>
                  재화 또는 서비스 제공 : 서비스 제공, 계약서·청구서 발송,
                  콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금
                  결제·정산을 목적으로 개인정보를 처리합니다.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                <span>
                  서비스 홍보 마케팅 및 광고에의 활용 : 신규 서비스(제품) 개발
                  및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여 기회
                  제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재,
                  서비스의 유효성 확인을 목적으로 개인정보를 처리합니다.
                </span>
              </li>
            </ol>
          </div>

          <div className="py-6 sm:py-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
              처리하는 개인정보의 항목
            </h2>
            <p
              className="text-[14px] leading-relaxed mb-4 sm:mb-6
				   md:text-[15px] lg:text-[16px]
				   text-[#a5a5a5]"
            >
              투피트는 서비스 제공을 위해 필요한 최소한의 범위에서 개인정보를
              수집·이용합니다.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span
                    className="text-[14px] leading-relaxed
						   md:text-[15px] lg:text-[16px]
						   text-[#a5a5a5]"
                  >
                    정보주체의 동의를 받지 않고 처리하는 개인정보 항목 투피트는
                    다음의 개인정보 항목을 정보주체의 동의없이 처리하고
                    있습니다.
                  </span>

                  <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="text-[14px] text-[#a5a5a5] mt-1
							   md:text-[15px] lg:text-[16px]"
                      >
                        a.
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-[14px] font-semibold text-[#a5a5a5] mb-2
							   md:text-[15px] lg:text-[16px]"
                        >
                          회원 서비스 운영
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              법적 근거 : 개인정보 보호법 제15조 제1항
                              제4호('계약 이행')
                            </span>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              수집・이용 항목 : 이메일 주소(ID), 비밀번호, 성명
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="text-[14px] text-[#a5a5a5] mt-1
							   md:text-[15px] lg:text-[16px]"
                      >
                        b.
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-[14px] font-semibold text-[#a5a5a5] mb-2
							   md:text-[15px] lg:text-[16px]"
                        >
                          판매 상품에 대한 문의 상담
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              법적 근거 : 개인정보 보호법 제15조 제1항
                              제4호('계약 이행')
                            </span>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              수집・이용 항목 : 성명, 회사명(단체명), 이메일,
                              전화번호, 구매내역
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="text-[14px] text-[#a5a5a5] mt-1
							   md:text-[15px] lg:text-[16px]"
                      >
                        c.
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-[14px] font-semibold text-[#a5a5a5] mb-2
							   md:text-[15px] lg:text-[16px]"
                        >
                          주문 및 결제 처리
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              법적 근거 : 개인정보 보호법 제15조 제1항
                              제4호('계약 이행')
                            </span>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              수집・이용 항목 : 이메일 주소(ID), 성명,
                              회사명(단체명), 주소, 전화번호, 주문내역, 결제정보
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <div
                    className="text-[14px] leading-relaxed text-[#a5a5a5] mb-3
						  md:text-[15px] lg:text-[16px]"
                  >
                    정보주체의 동의를 받아 처리하는 개인정보 항목 투피트는
                    다음의 개인정보 항목을 「개인정보 보호법」 제15조 제1항
                    제1호 및 제22조 제1항 제7호에 따라 정보주체의 동의를 받아
                    처리하고 있습니다.
                  </div>
                  <p
                    className="text-[14px] leading-relaxed text-[#a5a5a5] mb-3 sm:mb-4
						 md:text-[15px] lg:text-[16px]"
                  >
                    투피트는 법령에 따라 정보주체의 동의를 받지 않고도
                    개인정보를 처리할 수 있습니다.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="text-[14px] text-[#a5a5a5] mt-1
							   md:text-[15px] lg:text-[16px]"
                      >
                        a.
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-[14px] font-semibold text-[#a5a5a5] mb-2
							   md:text-[15px] lg:text-[16px]"
                        >
                          제품 및 서비스 문의를 위한 개인정보 처리
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              필수 항목 : 성명, 전화번호, 이메일 주소
                            </span>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              선택 항목 : 회사명 또는 단체명
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="text-[14px] text-[#a5a5a5] mt-1
							   md:text-[15px] lg:text-[16px]"
                      >
                        b.
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-[14px] font-semibold text-[#a5a5a5] mb-2
							   md:text-[15px] lg:text-[16px]"
                        >
                          서비스 홍보 마케팅 및 광고를 위한 개인정보 처리
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              필수 항목 : 성명, 전화번호, 이메일 주소
                            </span>
                          </div>
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span
                              className="text-[14px] leading-relaxed
									 md:text-[15px] lg:text-[16px]
									 text-[#a5a5a5]"
                            >
                              선택 항목 : 회사명 또는 단체명
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span
                    className="text-[14px] leading-relaxed
						   md:text-[15px] lg:text-[16px]
						   text-[#a5a5a5]"
                  >
                    그 외 개인정보 수집 방법
                  </span>
                  <div className="mt-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="text-[14px] text-[#a5a5a5] mt-1
							   md:text-[15px] lg:text-[16px]"
                      >
                        a.
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-[14px] font-semibold text-[#a5a5a5]
							   md:text-[15px] lg:text-[16px]"
                        >
                          이메일, 서면 양식, 오프라인(세미나 참석), 명함 수취,
                          행사 주최 측으로부터의 제공
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 sm:py-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
              개인정보의 처리 및 보유기간
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span
                  className="text-[14px] leading-relaxed
						 md:text-[15px] lg:text-[16px]
						 text-[#a5a5a5]"
                >
                  투피트는 법령에 따른 개인정보 보유·이용 기간 또는
                  정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보
                  보유·이용 기간 내에서 개인정보를 처리·보유합니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                <span
                  className="text-[14px] leading-relaxed
						 md:text-[15px] lg:text-[16px]
						 text-[#a5a5a5]"
                >
                  각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                </span>
              </div>

              <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-[14px] text-[#a5a5a5] mt-1
						   md:text-[15px] lg:text-[16px]"
                  >
                    a.
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[14px] font-semibold text-[#a5a5a5] mb-2
						   md:text-[15px] lg:text-[16px]"
                    >
                      홈페이지 회원 가입 및 관리 : 회원 탈퇴 시까지 다만, 다음의
                      사유에 해당하는 경우에는 해당 사유 종료 시까지
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span
                          className="text-[14px] text-[#a5a5a5] mt-1
								 md:text-[15px] lg:text-[16px]"
                        >
                          I.
                        </span>
                        <span
                          className="text-[14px] leading-relaxed
								 md:text-[15px] lg:text-[16px]
								 text-[#a5a5a5]"
                        >
                          관계 법령 위반에 따른 수사・조사 등이 진행 중인
                          경우에는 해당 수사・조사 종료 시까지
                        </span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span
                          className="text-[14px] text-[#a5a5a5] mt-1
								 md:text-[15px] lg:text-[16px]"
                        >
                          II.
                        </span>
                        <span
                          className="text-[14px] leading-relaxed
								 md:text-[15px] lg:text-[16px]
								 text-[#a5a5a5]"
                        >
                          홈페이지 이용에 따른 채권・채무관계 잔존 시에는 해당
                          채권・채무관계 정산 시까지
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-[14px] text-[#a5a5a5] mt-1
						   md:text-[15px] lg:text-[16px]"
                  >
                    b.
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[14px] font-semibold text-[#a5a5a5]
						   md:text-[15px] lg:text-[16px]"
                    >
                      제품 및 서비스 문의 : 3년 (전자상거래법 제6조)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-[14px] text-[#a5a5a5] mt-1
						   md:text-[15px] lg:text-[16px]"
                  >
                    c.
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[14px] font-semibold text-[#a5a5a5] mb-2
						   md:text-[15px] lg:text-[16px]"
                    >
                      재화 또는 서비스 제공 : 재화 또는 서비스 공급완료 및 요금
                      결제·정산 완료시까지 다만, 다음의 사유에 해당하는 경우에는
                      해당 기간 종료 시까지
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span
                          className="text-[14px] text-[#a5a5a5] mt-1
								 md:text-[15px] lg:text-[16px]"
                        >
                          I.
                        </span>
                        <div className="flex-1">
                          <span
                            className="text-[14px] leading-relaxed
								   md:text-[15px] lg:text-[16px]
								   text-[#a5a5a5]"
                          >
                            「전자상거래 등에서의 소비자 보호에 관한
                            법률」제6조에 따른 표시·광고, 계약 내용 및 이행 등
                            거래에 관한 기록
                          </span>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span
                                className="text-[14px] leading-relaxed
									   md:text-[15px] lg:text-[16px]
									   text-[#a5a5a5]"
                              >
                                표시·광고에 관한 기록 : 6개월
                              </span>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span
                                className="text-[14px] leading-relaxed
									   md:text-[15px] lg:text-[16px]
									   text-[#a5a5a5]"
                              >
                                계약 또는 청약철회, 대금 결제, 재화 등의 공급
                                기록 : 5년
                              </span>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span
                                className="text-[14px] leading-relaxed
									   md:text-[15px] lg:text-[16px]
									   text-[#a5a5a5]"
                              >
                                소비자 불만 또는 분쟁처리에 관한 기록 : 3년
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 sm:gap-3">
                        <span
                          className="text-[14px] text-[#a5a5a5] mt-1
								 md:text-[15px] lg:text-[16px]"
                        >
                          II.
                        </span>
                        <div className="flex-1">
                          <span
                            className="text-[14px] leading-relaxed
								   md:text-[15px] lg:text-[16px]
								   text-[#a5a5a5]"
                          >
                            「통신비밀보호법」 제15조의2에 따른 통신사실확인자료
                            보관
                          </span>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span
                                className="text-[14px] leading-relaxed
									   md:text-[15px] lg:text-[16px]
									   text-[#a5a5a5]"
                              >
                                컴퓨터통신, 인터넷 로그기록자료, 접속지 자료 :
                                3개월
                              </span>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span
                                className="text-[14px] leading-relaxed
									   md:text-[15px] lg:text-[16px]
									   text-[#a5a5a5]"
                              >
                                서비스 이용에 관한 기록 : 1년 (전자상거래
                                등에서의 소비자 보호에 관한 법률)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-[14px] text-[#a5a5a5] mt-1
						   md:text-[15px] lg:text-[16px]"
                  >
                    d.
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[14px] font-semibold text-[#a5a5a5]
						   md:text-[15px] lg:text-[16px]"
                    >
                      서비스 홍보 마케팅 및 광고 : 동의 철회 시까지(「개인정보
                      보호법」 제15조 제1항 제1호)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-[14px] text-[#a5a5a5] mt-1
						   md:text-[15px] lg:text-[16px]"
                  >
                    e.
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[14px] font-semibold text-[#a5a5a5]
						   md:text-[15px] lg:text-[16px]"
                    >
                      세법이 규정하는 모든 거래에 관한 장부 및 증빙서류 : 5년
                      (국세 기본법)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-[14px] text-[#a5a5a5] mt-1
						   md:text-[15px] lg:text-[16px]"
                  >
                    f.
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[14px] font-semibold text-[#a5a5a5]
						   md:text-[15px] lg:text-[16px]"
                    >
                      세금계산서 발급 및 전자금융거래 기록 : 5년
                      (전자금융거래법)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 sm:py-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
              개인정보의 파기 절차 및 방법에 관한 사항
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 개인정보 보유기간의 경과, 처리 목적 달성 등
                  개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를
                  파기합니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리
                  목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
                  계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
                  데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다. ※
                  다른 법령에 따라 보존하는 개인정보의 항목과 보존 근거는
                  '개인정보의 처리 및 보유기간' 항목에서 확인 가능
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  개인정보 파기의 절차 및 방법은 다음과 같습니다.
                </span>
              </div>

              <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    a.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] mb-1 sm:mb-2 md:text-[15px]">
                      파기절차 : 투피트는 파기 사유가 발생한 개인정보를
                      선정하고, 투피트의 개인정보 보호 책임자의 승인을 받아
                      개인정보를 파기합니다.
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    b.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      파기방법 : 투피트는 전자적 파일 형태로 기록·저장된
                      개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에
                      기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여
                      파기합니다.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 sm:py-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
              개인정보의 제3자 제공에 관한 사항
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 정보주체의 개인정보를 개인정보의 처리 목적에서 명시한
                  범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등
                  「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만
                  개인정보를 제3자에게 제공하고 그 이외에는 정보주체의
                  개인정보를 제3자에게 제공하지 않습니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 정보주체의 개인정보를 결제 처리 및 원활한 서비스
                  제공을 위해 「개인정보 보호법」 제17조 제1항 제1호에 따라
                  정보주체의 동의를 얻어 필요한 최소한의 범위로만 제공합니다.
                </span>
              </div>

              <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    a.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] mb-1 sm:mb-2 md:text-[15px]">
                      제공받는 자 : (주)비바리퍼블리카(토스페이먼츠)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    b.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      제공 목적 : 구독 결제 처리 및 결제 승인, 결제 관련 고객
                      지원
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    c.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      제공 항목 : 이름, 이메일(ID), 회사명(단체명), 국가, 주소,
                      연락처
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    d.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      보유 및 이용 기간 : 결제 처리 및 관련 법령에 따른 보관
                      기간 동안 보유 후 파기
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
              <div className="flex items-start gap-2 sm:gap-3 py-2 sm:py-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 아래의 경우에는 정보주체의 동의 없이 관계 기관에
                  개인정보를 제공할 수 있습니다.
                </span>
              </div>

              <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4 mb-1 sm:mb-2">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    a.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] mb-1 sm:mb-2 md:text-[15px]">
                      관련 근거 : 개인정보 보호법 제17조 및 관련 법령
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    b.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      제공받는 자 : 국세청
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    c.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      제공 목적 : 연말정산 소득공제 신고 및 증명서류 발급
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    d.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      제공 항목 : 결제 내역
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    e.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      보유 및 이용 기간 : 관련 법령에 따른 보관 기간 동안 보유
                      후 파기
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
            개인정보의 안전성 확보조치에 관한 사항
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                투피트는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                있습니다.
              </span>
            </div>

            <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  관리적 조치 : 내부관리 계획 수립·시행, 전담조직 운영, 정기적
                  직원 교육
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리,
                  접근통제시스템 설치, 개인정보의 암호화, 보안 프로그램 설치 및
                  갱신
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  물리적 조치 : 전산실, 자료 보관실 등의 접근통제
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
            개인정보 자동 수집 장치의 설치・운영 및 그 거부에 관한 사항
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px] font-medium">
                설치・운영하는 개인정보 자동 수집 장치
              </span>
            </div>

            <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 정보주체에게 개별적인 서비스와 편의를 제공하기 위해
                  이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를
                  사용합니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  쿠키는 웹사이트 운영에 이용되는 서버(http)가 정보주체의 컴퓨터
                  브라우저에게 보내는 소량의 정보이며 정보주체의 PC 또는
                  모바일에 저장됩니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의
                  설정을 할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 맞춤형
                  서비스 이용에 어려움이 발생할 수 있습니다.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 py-3 sm:py-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px] font-medium">
                행태정보의 수집・이용・제공 및 거부 등에 관한 사항
              </span>
            </div>

            <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 서비스 이용과정에서 사용자에게 최적화된 맞춤형 서비스
                  및 혜택, 온라인 맞춤형 광고 등을 제공하기 위하여 쿠키를
                  활용하여 개인을 식별 가능한 형태로 행태정보를 수집・이용하고
                  있습니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 자사가 운영하는 웹사이트에서 다음과 같이 행태정보를
                  수집하고 있습니다.
                </span>
              </div>

              <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4 mb-1 sm:mb-2">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    a.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] mb-1 sm:mb-2 md:text-[15px]">
                      수집하는 행태정보 항목 : 웹사이트 방문 이력
                      (개인정보보호법 제15조 제1항 제1호)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    b.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      행태정보 수집 방법 : 정보주체가 웹사이트 방문 시 자동 수집
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    c.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      행태정보 수집 목적 : 정보주체 관심 기반 맞춤형 서비스 및
                      광고 제공
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[14px] sm:text-base lg:text-lg text-[#a5a5a5] mt-1 md:text-[15px]">
                    d.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-base lg:text-lg font-semibold text-[#a5a5a5] md:text-[15px]">
                      보유・이용기간 : 수집일로부터 90일 후 파기
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 최적화된 맞춤형 서비스 및 혜택, 온라인 맞춤형 광고
                  등에 필요한 최소한의 행태정보만을 수집하며, 사상, 신념,
                  학력・병력 등 개인의 권리・이익이나 사생활을 침해할 우려가
                  있는 민감한 행태정보를 수집하지 않습니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체는 아래의 연락처로 행태정보와 관련하여 궁금한 사항과
                  거부권 행사, 피해 신고 접수 등을 문의할 수 있습니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px] font-medium">
                    ▶ 개인정보 보호 담당부서
                  </span>
                </div>
              </div>

              <div className="ml-4 sm:ml-6">
                <div className="space-y-2 sm:space-y-2">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      부서명 : 운영팀
                    </span>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      주 소 : 서울특별시 관악구 호암로 597, 4층 3호
                    </span>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      contact@codebridge.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 lg:mb-8 text-[#a5a5a5]">
            정보주체와 법정대리인의 권리・의무 및 행사방법에 관한 사항
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체는 투피트에 대해 언제든지 개인정보
                  열람·정정·삭제·처리정지 및 철회 요구, 자동화된 결정에 대한
                  거부 또는 설명 요구 등의 권리를 행사(이하 "권리 행사"라 함) 할
                  수 있습니다. ※ 14세 미만 아동에 관한 개인정보의 열람 등 요구는
                  법정대리인이 직접 해야 하며, 14세 이상의 미성년자인 정보주체는
                  정보주체의 개인 정보에 관하여 미성년자 본인이 권리를
                  행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  권리 행사는 투피트에 대해 「개인정보 보호법」 시행령 제41조
                  제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
                  있으며, 투피트는 이에 대해 지체 없이 조치하겠습니다.
                </span>
              </div>
              <div className="ml-4 sm:ml-6 lg:ml-8">
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      정보주체는 언제든지 홈페이지 '문의하기'를 통해
                      열람·수정·삭제를 요청할 수 있습니다.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      정보주체는 언제든지 홈페이지 '마이페이지'에서 개인정보를
                      직접 조회·수정·삭제할 수 있습니다.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      정보주체는 언제든지 '회원탈퇴'를 통해 개인정보의 수집 및
                      이용 동의 철회가 가능합니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 py-3 sm:py-4 lg:py-6">
            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
                  대리인을 통하여 하실 수도 있습니다. 이 경우 "개인정보 처리
                  방법에 관한 고시(제2020-7호)" 별지 제11호 서식에 따른 위임장을
                  제출하셔야 합니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체가 개인정보 열람 및 처리 정지를 요구할 권리는
                  「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 제한될
                  수 있습니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는
                  경우에는 해당 개인정보의 삭제를 요구할 수 없습니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  자동화된 결정이 이루어진다는 사실에 대해 정보주체의 동의를
                  받았거나, 계약 등을 통해 미리 알린 경우, 법률에 명확히 규정이
                  있는 경우에는 자동화된 결정에 대한 거부는 인정되지 않으며 설명
                  및 검토 요구만 가능합니다. ※ 또한 자동화된 결정에 대한
                  거부·설명 요구는 다른 사람의 생명·신체·재산과 그 밖의 이익을
                  부당하게 침해할 우려가 있는 등 정당한 사유가 있는 경우에는 그
                  요구가 거절될 수 있습니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 권리 행사를 한 자가 본인이거나 정당한 대리인인지를
                  확인합니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 권리 행사를 아래의 부서에 할 수 있습니다. 투피트는
                  정보주체의 권리 행사가 신속하게 처리되도록 노력하겠습니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  ▶ 개인정보 열람 등 청구 접수·처리 부서
                </span>
              </div>
              <div className="ml-4 sm:ml-6 lg:ml-8">
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      부서명 : 운영팀
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      주 소 : 서울특별시 관악구 호암로 597, 4층 3호
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      contact@codebridge.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 lg:mb-8 text-[#a5a5a5]">
            개인정보 보호책임자의 성명 또는 개인정보 업무 담당부서 및 고충사항을
            처리하는 부서에 관한 사항
          </h2>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                  개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을
                  위하여 아래와 같이 개인정보 보호 담당 부서를 지정하고
                  있습니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  ▶ 개인정보 보호 담당부서
                </span>
              </div>
              <div className="ml-4 sm:ml-6 lg:ml-8">
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      부서명 : 운영팀
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      contact@codebridge.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 py-3 sm:py-4 lg:py-6">
            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체는 투피트의 서비스(또는 사업)을 이용하시면서 발생한
                  모든 개인정보보호 관련 문의, 불만 처리, 피해 구제 등에 관한
                  사항을 개인정보 보호책임자 및 담당부서로 문의할 수 있습니다.
                  투피트는 정보주체의 문의에 대해 지체 없이 답변 및 처리해 드릴
                  것입니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 lg:mb-8 text-[#a5a5a5]">
            정보주체의 권익침해에 대한 구제방법
          </h2>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  정보주체는 개인정보침해로 인한 구제를 받기 위하여
                  개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터
                  등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
                  개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
                  바랍니다.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6 py-3 sm:py-4 lg:py-6">
            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6 mb-2 sm:mb-3 lg:mb-4">
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <span className="text-[14px] sm:text-[15px] md:text-base lg:text-lg text-[#a5a5a5] mt-0.5 sm:mt-1">
                    a.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-[15px] md:text-base lg:text-lg font-semibold text-[#a5a5a5] mb-1 sm:mb-2">
                      개인정보분쟁조정위원회 : (국번없이) 1833-6972
                      (www.kopico.go.kr)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <span className="text-[14px] sm:text-[15px] md:text-base lg:text-lg text-[#a5a5a5] mt-0.5 sm:mt-1">
                    b.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-[15px] md:text-base lg:text-lg font-semibold text-[#a5a5a5]">
                      개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <span className="text-[14px] sm:text-[15px] md:text-base lg:text-lg text-[#a5a5a5] mt-0.5 sm:mt-1">
                    c.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-[15px] md:text-base lg:text-lg font-semibold text-[#a5a5a5]">
                      대검찰청 : (국번없이) 1301 (www.spo.go.kr)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <span className="text-[14px] sm:text-[15px] md:text-base lg:text-lg text-[#a5a5a5] mt-0.5 sm:mt-1">
                    d.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[14px] sm:text-[15px] md:text-base lg:text-lg font-semibold text-[#a5a5a5]">
                      경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  투피트는 정보주체의 개인정보 자기결정권을 보장하고, 개인정보
                  침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나
                  상담이 필요한 경우 아래의 담당 부서로 연락해 주시기 바랍니다.
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                  ▶ 개인정보 보호 담당부서
                </span>
              </div>

              <div className="ml-4 sm:ml-6 lg:ml-8">
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      부서명 : 운영팀
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <span className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[14px] sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5] md:text-[15px]">
                      contact@codebridge.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-pre mb-4 sm:mb-6 text-[#a5a5a5]">
            개인정보 처리방침의 변경에 관한 사항
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="ml-4 sm:ml-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] leading-relaxed md:text-[15px] lg:text-[16px] text-[#a5a5a5]">
                  이 개인정보 처리방침은 2025. 1. 1부터 적용됩니다.
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[14px] leading-relaxed md:text-[15px] lg:text-[16px] text-[#a5a5a5]">
                  이전의 개인정보 처리방침은 상단에서 확인하실 수 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
