import React from 'react';
import { Player, Stat } from '../interfaces';
import Card from './Card';
import { StyledList } from '../styles';

interface ListProps {
    data: Player[] | Stat[];
}

const List: React.FC<ListProps> = ({ data }) => {

    return (
        <StyledList>
            {data && data.map((item: Player | Stat, index: number) => (
                <Card key={index} data={item} />
            ))}
        </StyledList>
    );
};

  export default List;