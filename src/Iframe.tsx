import { embedDashboard } from "@superset-ui/embedded-sdk"
import { useEffect } from "react"

// given by the Superset embedding UI
const supersetUUID = "7f534c62-f5b9-435d-bfd0-3c0b0852ae3b"
const supersetDomain = "http://localhost:9000"
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Imxhc3RfbmFtZSI6IkxlZSIsImZpcnN0X25hbWUiOiJTdGFuIiwidXNlcm5hbWUiOiJzdGFuX2xlZSJyZXNvdXJjZXMiOltdLCJybHNfcnVsZXMiOltdLCJpYXQiOjE3MDI0OTE1NTYuMDgxMTU4MiwiZXhwIjoxNzAyNDkxODU2LjA4MTE1ODIsImF1ZCI6Imh0dHA6Ly9zdXBlcnNldDo4MDg4LyIsInR5cGUiOiJndWVzdCJ9.d68IOn5buk2Yryb0ZGYQmmrKYrySibqvorOxnEC9Yqk"

export function Iframe() {
  useEffect(() => {
    const elem = document.getElementById("container")

    if (elem) {
      embedDashboard({
        id: supersetUUID,
        supersetDomain,
        mountPoint: elem,
        fetchGuestToken: () =>
          new Promise((res) => {
            res(token)
          }),
        dashboardUiConfig: {
          // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional)
          hideTitle: true,
          filters: {
            expanded: true,
          },
        },
      })
    }
  }, [])

  return (
    <div
      id="container"
      style={{
        height: "40vh",
        width: "80vw",
      }}
    />
  )
}
