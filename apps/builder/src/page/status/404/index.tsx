import { FC } from "react"
import { ErrorPage } from "@/page/status/errorPage"
import { Result404Icon } from "@illa-design/icon"
import { buttonStyle, iconStyle } from "@/page/status/style"
import { Button } from "@illa-design/button"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const Page404: FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <ErrorPage
      title="404"
      des={t("status.404.des")}
      img={<Result404Icon css={iconStyle} />}
    >
      <div css={buttonStyle}>
        <Button onClick={() => navigate(0)} colorScheme={"gray"}>
          {t("status.404.again")}
        </Button>
        <Button onClick={() => navigate("/")}>{t("status.back")}</Button>
      </div>
    </ErrorPage>
  )
}
