import { List, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

export function DocumentInfo() {
    return (
        <List.Root>
            <List.Item>Document 1</List.Item>
            <List.Item>Document 2</List.Item>
            <List.Item>
                <Tooltip content="This is my tooltip">
                    <Text>Document 3</Text>
                </Tooltip>
            </List.Item>
        </List.Root>
    );
}

