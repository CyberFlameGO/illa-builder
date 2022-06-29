import { forwardRef, useMemo } from "react"
import { Timeline, TimelineItem } from "@illa-design/timeline"
import { WrappedTimelineProps } from "@/widgetLibrary/TimelineWidget/interface"

export const WrappedTimeline = forwardRef<any, WrappedTimelineProps>(
  (props, ref) => {
    const {
      items = [
        "The first milestone",
        "The second milestone",
        "The third milestone",
      ],
      direction,
      pending,
    } = props

    const timelineItems = useMemo(() => {
      if (Array.isArray(items)) {
        return items.map((item) => (
          <TimelineItem key={item}>{item}</TimelineItem>
        ))
      }
      return null
    }, [items])

    return (
      <Timeline direction={direction} pending={pending}>
        {timelineItems}
      </Timeline>
    )
  },
)

WrappedTimeline.displayName = "WrappedTimeline"

export const TimelineWidget = WrappedTimeline