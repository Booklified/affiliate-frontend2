import { Heading, Img, Text } from "../components-main"
const DownloadComponent = ({itemTitle}) => {
    return (
        <>
            <div className="flex flex-col gap-[23px] pr-20">
            <div className="flex h-[147px] w-[178px] items-center justify-center aspect-w-1 aspect-h-1 bg-[url(/images/img_group_555.svg)] cursor-pointer hover:bg-[url(/images/img_group_554.svg)] bg-cover bg-no-repeat px-[46px] pb-[26px] pt-[46px]">
              <Img
                src="img_user.svg"
                width={49}
                height={73}
                alt="userimage"
                className="h-[73px] w-[49]"
              />
            </div>
          <Text size="lg" as="p" className="pb-6 ml-3.5 md:ml-0">
              {itemTitle}
          </Text>
          
          </div>
        </>
    )
}

export {DownloadComponent}