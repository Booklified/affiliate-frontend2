import { Heading, Img, Text } from "../../../components-main";
const UploadComponent = ({ itemTitle }) => {
  return (
    <>
      <div className="flex flex-col pt-6 gap-[23px] pr-20">
        <Text size="lg" as="p" className="ml-3.5 md:ml-0">
          {itemTitle}
        </Text>
        <div className="flex h-[147px] w-[178px] items-center justify-center aspect-w-1 aspect-h-1 bg-[url(/images/img_group_555.svg)] cursor-pointer hover:bg-[url(/images/img_group_554.svg)] bg-cover bg-no-repeat px-[46px] pb-[26px] pt-[46px]">
          <Img
            src="img_plus.svg"
            width={46}
            height={46}
            alt="plus"
            className="h-[46px] w-[46]"
          />
        </div>

        {itemTitle === "Brand Images" && (
          <div className="ml-4 flex flex-col items-start gap-[3px] md:ml-0">
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Examples:
            </Text>
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Logo Files
            </Text>
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Branding Graphics
            </Text>
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Color Swatches
            </Text>
          </div>
        )}
        {itemTitle === "Brand Documents" && (
          <div className="ml-4 flex flex-col items-start gap-[3px] md:ml-0">
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Examples:
            </Text>
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Brand Guide PDF or Word Doc
            </Text>
          </div>
        )}
      </div>
    </>
  );
};

export { UploadComponent };
