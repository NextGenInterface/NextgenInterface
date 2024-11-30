import React from 'react'
import { pics } from '../../components/design/pics';
import DesignList from '@/components/design/DesignList';
import PageLayout from '@/components/utils/pageLayout/PageLayout';


const DesignPage = () => {
    return (
        <PageLayout>
            <DesignList item={pics} />
        </PageLayout>
    )
}

export default DesignPage